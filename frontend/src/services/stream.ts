import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY!);

export const connectUser = async (userId: string, token: string) => {
  await client.connectUser({ id: userId }, token);
};

export const createChannel = async (channelId: string, userId: string) => {
  const channel = client.channel('messaging', channelId, { members: [userId] });
  await channel.create();
  return channel;
};
